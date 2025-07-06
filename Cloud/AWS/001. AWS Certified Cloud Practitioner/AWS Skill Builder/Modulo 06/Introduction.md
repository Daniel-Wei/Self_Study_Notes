### 1. Introduction

#### 1. Block Storage
- Provides persistent, low-latency block-level storage volumes that attach to EC2 instances like physical hard drives
- Can be encrypted, backed up via snapshots, and modified while in use without distrupting the instance
- AWS offer 2 primary block storage servicess

  - Amazon EC2 instance store
    - An unmanaged non-persistent, high-performance block storage directly attached to EC2 instances for temporary data
  - Amazon Elastic Block Store (EBS)
    - A managed service that provides persistent block storage volumes for EC2 instances, offering various types for different workloads

#### 2. Object Storage
- Data storage architecture that manages data as objects in a flat address space
- It offers unlimited scalability so you can store vast amounts of unstructured data without worrying about capacity constraints
- Provides enhanced metadata capabilities to provide more efficient data management, and analytics across massive datasets

- Amazon Object Storage: Amazon Simple Storage Service (S3)
  - A fully managed scalable object storage service for storing and retrieving any amounnt of data from anywhere

#### 3. File Storage
- Provides shared file systems accessibe over networks, so multiple users and applications can access the same data simultaneously
- Offer scalability and flexibility so you can expand storage capacity as needs grow without managing physical infrastructure

- AWS File Storage Services
  - Amazon Elastic File System (EFS)
    - A fully managed, scalable NFS file system for use with AWS Cloud services and on-premised resources
  - Amzzon FSx
    - A fully managed file storage services for popular file systems like Windows, Lustre, and NetApp ONTAP
   
#### 4. Additional Storage Services
- AWS Storage Gateway
  - A fully managed, hybrid-cloud storage service that provides on-premises access to virtually unlimited cloud storage
- AWS Elastic Disaster Recovery
  - A fully managed service that streamlines the recovery of your physical, virtual and cloud-based servers into AWS
 
#### 5. AWS Shared Responsibility
- Fully managed: AWS
- Managed
  - AWS: the underlying storage infrastructure, hardware redundancy, and volume replication
  - Customers: data backup strategies, encryption configuration, volume performance optimization, and capacity planning
- Unmanaged: Customers
