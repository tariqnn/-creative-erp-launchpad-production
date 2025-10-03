import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Test function called");
    
    const demoData = await req.json();
    console.log("Received data:", demoData);

    // Simple validation
    if (!demoData.name || !demoData.email) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Name and email are required" 
        }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    // Return success without database operations
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Test successful - data received",
      receivedData: demoData
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in test function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Test function failed" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);












