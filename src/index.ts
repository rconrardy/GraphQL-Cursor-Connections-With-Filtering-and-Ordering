import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { runApplication } from "./runApplication";

// Create the {PrismaClient}
export const prismaClient = new PrismaClient();

/**
 * The entry point of the application
 *
 * @returns void
 */
const main = async () => {
  // Get the port from the environment variables
  const port = process.env.PORT ?? "";

  try {
    // Run the application
    await runApplication(parseInt(port));

    // Log the service URL
    console.log(`🚀 Service is ready at http://localhost:${port}/graphql`);
  } catch (error) {
    // Log the {Error}
    console.error("💀 Error starting the service", error);
  }
};

// Start the application
void main().finally(async () => {
  await prismaClient.$disconnect();
});
