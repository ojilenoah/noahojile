import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import fs from "fs";
import path from "path";

// Function to save contact message to a text file
async function saveContactMessage(contactData: any): Promise<void> {
  try {
    const filePath = path.join(process.cwd(), "contact_messages.txt");
    const timestamp = new Date().toISOString();
    
    // Format the message
    const messageEntry = `
----- Message Received at ${timestamp} -----
Name: ${contactData.name}
Email: ${contactData.email}
Message: ${contactData.message}
---------------------------------------
`;
    
    // Append to file (create if doesn't exist)
    fs.appendFileSync(filePath, messageEntry);
    console.log(`Contact message saved to ${filePath}`);
  } catch (error) {
    console.error("Error saving contact message:", error);
    throw error;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Save the contact message to a text file
      await saveContactMessage(contactData);
      
      // Return success response
      return res.status(200).json({ 
        success: true,
        message: "Message received successfully! We'll get back to you soon."
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: validationError.message
        });
      }
      
      return res.status(500).json({ 
        success: false,
        message: "Something went wrong. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
