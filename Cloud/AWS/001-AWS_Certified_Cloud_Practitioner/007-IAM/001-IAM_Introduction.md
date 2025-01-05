### 001 IAM Introduction

#### 1. IAM: Users & Groups
- IAM = Identity and Access Management, **Global** Service
- **Root account created by default**, should not be used or shared
- **Users** are people within your organization, and can be grouped
- **Groups** can only contain users, not other groups
- Users do not have to belong to a group, and users can belong to multiple groups

#### 2. IAM: Permissions
- Users or Groups can be assigned JSON documents called policies
  ````json
  {
      "Version": "2025-01-16",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": "ec2:Desctibe*",
              "Resource": "*"
          },
          {
              "Effect": "Allow",
              "Action": "elasticloadbalancing:Desctibe*",
              "Resource": "*"
          },
          {
              "Effect": "Allow",
              "Action": [
                "cloudwatch:ListMetrics",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:Describe*",
              ]
              "Resource": "*"
          }
      ]
  }
  ````
