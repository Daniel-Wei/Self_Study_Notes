### 002 IAM Users & Groups Hands On

#### 1. Region Selection Unavailable 
- IAM as an entire service is a global service.
- When you create an IAM user, it will be available everywhere.

#### 2.  IAM -> Access Management -> Users -> Create User
- Specify user details
  - User Name
  - Provide user access to the AWS Management Console
    - Specify a user in Identity Center
    - I want to create an IAM user
    - IAM vs IAM Identity Center (AWS Single Sign-On SSO): https://www.youtube.com/watch?v=gpquYmcpZpo
      - IAM: Manage identities and access in a single AWS account
      - IAM Identity Center: Centrally manage access across multiple accountes and applications (though you CAN use it for a single account)
      - IAM: Not leveraging AWS Organizations
      - IAM Identity Center: Leveraging AWS Organizations
      - IAM Identity Center: The recommended way to manage Console access, command line and programmatic access (i.e., access key IDs and secret access keys)
