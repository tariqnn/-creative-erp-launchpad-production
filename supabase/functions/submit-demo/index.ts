import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DemoRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  interest?: string;
  preferred_date?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase configuration");
      throw new Error("Missing Supabase configuration");
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const demoData: DemoRequest = await req.json();

    console.log("Received demo request:", demoData);

    // Validate required fields
    if (!demoData.name || !demoData.email) {
      throw new Error("Name and email are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(demoData.email)) {
      throw new Error("Invalid email format");
    }

    // Insert demo request into database
    const { data, error } = await supabase
      .from('demo_requests')
      .insert({
        name: demoData.name,
        email: demoData.email,
        phone: demoData.phone,
        company: demoData.company,
        interest: demoData.interest,
        preferred_date: demoData.preferred_date && demoData.preferred_date !== '' ? 
          (() => {
            try {
              const date = new Date(demoData.preferred_date);
              return isNaN(date.getTime()) ? null : date.toISOString().split('T')[0];
            } catch (e) {
              return null;
            }
          })() : null,
        message: demoData.message
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      throw error;
    }

    console.log("Demo request saved:", data);

    // Send notification email (optional - don't fail if email fails)
    let emailSent = false;
    let emailError = null;
    
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (resendApiKey) {
        const { data: sent, error: sendError } = await resend.emails.send({
      from: "Creative Network <onboarding@resend.dev>",
      to: [Deno.env.get("BOOKING_EMAIL") || "info@creativenetworkservices.com"],
      reply_to: demoData.email,
      subject: `New Meeting Request - ${demoData.interest || 'Demo'} Plan from ${demoData.name}`,
      text: `New meeting booking request\n\nName: ${demoData.name}\nEmail: ${demoData.email}\nPhone: ${demoData.phone || 'Not provided'}\nCompany: ${demoData.company || 'Not provided'}\nPlan Interest: ${demoData.interest || 'Not specified'}\nPreferred Date: ${demoData.preferred_date || 'Not provided'}\nMessage: ${demoData.message || 'No message'}\nSubmitted at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 24px;">🎯 New Meeting Request</h2>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="margin: 0; font-size: 18px;">Plan Interest: ${demoData.interest || 'General Demo'}</h3>
            </div>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-top: 0;">👤 Contact Information</h3>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${demoData.name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${demoData.email}" style="color: #667eea;">${demoData.email}</a></p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${demoData.phone || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Company:</strong> ${demoData.company || 'Not provided'}</p>
            </div>
            
            ${demoData.preferred_date ? `
            <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin-bottom: 20px;">
              <h3 style="color: #065f46; margin-top: 0;">📅 Preferred Meeting Time</h3>
              <p style="margin: 0; color: #047857; font-weight: 600;">${(() => {
                try {
                  const date = new Date(demoData.preferred_date);
                  return isNaN(date.getTime()) ? demoData.preferred_date : date.toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });
                } catch (e) {
                  return demoData.preferred_date;
                }
              })()}</p>
            </div>
            ` : ''}
            
            ${demoData.message ? `
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px;">
              <h3 style="color: #92400e; margin-top: 0;">💬 Additional Notes</h3>
              <p style="margin: 0; color: #b45309;">${demoData.message}</p>
            </div>
            ` : ''}
            
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af;">
                <strong>📧 Reply directly to this email to contact ${demoData.name}</strong>
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <em>Submitted at: ${new Date().toLocaleString()}</em>
            </p>
          </div>
        </div>
      `,
        });

        if (sendError) {
          console.error("Resend error:", sendError);
          emailError = sendError.message || 'Email failed to send';
        } else {
          console.log("Email sent successfully:", sent);
          emailSent = true;
        }
      } else {
        console.log("RESEND_API_KEY not configured, skipping email");
      }
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr);
      emailError = emailErr.message || 'Email service unavailable';
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Demo request submitted successfully",
      id: data.id,
      emailSent,
      emailError: emailError || null
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-demo function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to submit demo request" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);