### AWS Lambda

#### 1. Definition
- Serverless compute service that runs code in response to events without the need to provision and manage servers
- Automatically manages the underlying infrastructure, scaling resources based on volume of requests
- Users are charged only for the compute consumed
- Lambda handles execution, scaling and resource allocation

#### 2. Steps
- Upload code to Lambda
- Set code to trigger from an event source
- Run code when triggered
- Pay only for the compute time used

#### 3. Lambda Use Cases
- Ideal for builing responsive, event-driven applications across a wide range of industries

- Real time image processing for a social media application
  - Automatically scales based on uploads and charges only for the time spend processing each image
 
- Personlized content delivery for a new aggregator（新闻聚合）
  - Automatically scales with user traffic and reduces costs by running code only when users interact
 
- Real-time event handling for an online game
  - Handles thousands of events, in real-time, with no need to manage servers
  - Costs scale with usage, which is ideal for peak gaming times
 
#### 4. Demo
- SQS (Simple Queue Service) queue automatically triggers a Lambda function whenever a new message is added to it
  - Send and Receive messages

- Lambda function
  - Create: blueprint

- Execution Role/Permission Policy
  - Ensures the Lambda function has the right permissions to access the SQS queue
  - Example: SQS poller policy template
 
- Lambda trigger

#### 5. Key Components
- Lambda function
- Triggers
- Runtimes
