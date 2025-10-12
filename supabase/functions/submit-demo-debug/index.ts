import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

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
    console.log("=== DEBUG FUNCTION START ===");
    
    // Check environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const bookingEmail = Deno.env.get('BOOKING_EMAIL');
    
    console.log("Environment check:");
    console.log("- SUPABASE_URL:", supabaseUrl ? "✓ Set" : "✗ Missing");
    console.log("- SUPABASE_SERVICE_ROLE_KEY:", supabaseServiceKey ? "✓ Set" : "✗ Missing");
    console.log("- RESEND_API_KEY:", resendApiKey ? "✓ Set" : "✗ Missing");
    console.log("- BOOKING_EMAIL:", bookingEmail || "Not set (will use default)");
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    console.log("Supabase client created successfully");

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

    console.log("Validation passed, attempting database insert...");

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

    console.log("Demo request saved successfully:", data);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Demo request submitted successfully (debug mode)",
      id: data.id,
      debug: {
        environmentVariables: {
          supabaseUrl: !!supabaseUrl,
          supabaseServiceKey: !!supabaseServiceKey,
          resendApiKey: !!resendApiKey,
          bookingEmail: !!bookingEmail
        }
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("=== DEBUG FUNCTION ERROR ===");
    console.error("Error details:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to submit demo request",
        debug: {
          errorType: error.constructor.name,
          errorMessage: error.message,
          timestamp: new Date().toISOString()
        }
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
















