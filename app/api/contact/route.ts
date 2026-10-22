import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema=z.object({name:z.string().trim().min(2).max(100),email:z.string().email().max(200),phone:z.string().max(40).optional(),company:z.string().trim().min(1).max(150),website:z.union([z.literal(""),z.string().url().max(300)]).optional(),need:z.string().min(1).max(100),message:z.string().trim().min(20).max(5000),companyFax:z.string().max(0).optional()});

export async function POST(request:Request){
  let body:unknown; try{body=await request.json();}catch{return NextResponse.json({message:"Invalid request."},{status:400});}
  const parsed=contactSchema.safeParse(body); if(!parsed.success)return NextResponse.json({message:"Please check the form and try again.",errors:parsed.error.flatten().fieldErrors},{status:400});
  const endpoint=process.env.CONTACT_FORM_WEBHOOK_URL; if(!endpoint)return NextResponse.json({message:"The secure email connection is not configured yet. Please use the consultation calendar or email address shown on this page."},{status:503});
  try{const response=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...parsed.data,submittedAt:new Date().toISOString(),source:"Digital Rajen website"})});if(!response.ok)throw new Error("delivery failed");return NextResponse.json({message:"Thanks—your enquiry has been sent. I’ll be in touch soon."},{status:202});}catch{return NextResponse.json({message:"Your message could not be delivered right now. Please try again or use the booking link."},{status:502});}
}
