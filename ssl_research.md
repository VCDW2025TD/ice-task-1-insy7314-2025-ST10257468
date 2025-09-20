BELA J PREMCHUND – ST10257468
INFORMATION SYSTEM 3D – INSY7314
ICE TASK 1

1.	SSL vs TLS
SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are protocols that are used to encrypt data transmitted between users, servers, systems, and applications. In order for two parties to exchange data, they need to be authenticated. SSL and TSL will complete this task. (AWS, n.d.)
SSL is a set of rules that create secure connections between two parties, and even though it is effective, since it is an older technology, it does have many security flaws. TLS is the newer version of SSL, including the fixes to the previous flaws. (AWS, n.d.)

2.	Why is HTTPS more secure than HTTP?
Since HTTPS uses TSL to encrypt all communication, it makes it more secure than HTTP. HTTP is an unencrypted connection. (AWS, n.d.)

3.	Risks of not using SSL in web apps
•	Users would not trust your website, this does affect your reputation, which can in turn reduce the number of users on your website.  (Sharma, n.d.)
•	Without this certificate, you can face non-compliance issues with search engines as they have requirements in place that need to be met in order to publish your website. (Sharma, n.d.)
•	You can face data leak, where threat actors can access users’ personal information if the website is not secure. (Sharma, n.d.)
•	Without this certification, your website is at risk of phishing attacks. This puts your information and users’ information at risk. (Sharma, n.d.)


4.	Real-world incidents involving missing or misconfigured SSL
•	Equifax Breach (2017): due to an expired certificate, nearly 148 million users’ personal information (their social security numbers, birthdays, and addresses) was leaked. Equifax allowed 300 certificates to expire which led to this data breach. Since one of the certificates were for network monitoring, they were unable to monitor their data, hence allowing a threat actor to enter the system. (terrabyte, 2024)
•	Heartland Payment Systems (2008): due to weak SSL encryption, Heartland Payment Systems experienced a data breach that affected 100 million credit card records. Threat actors used the weak encryption to inject a malware which would intercept the unencrypted data during the payment process, hence gaining the credit card details and authentication data (PIN codes and passwords) used to verify the transaction. This would allow them to make transactions to their personal accounts, draining users of their funds. (terrabyte, 2024)

References
AWS, n.d. What’s the Difference Between HTTP and HTTPS?. [Online] 
Available at: https://aws.amazon.com/compare/the-difference-between-https-and-http/#:~:text=HTTPS%20over%20HTTP.-,Security,the%20data%20over%20the%20network.
[Accessed 19 September 2025].
AWS, n.d. What’s the Difference Between SSL and TLS?. [Online] 
Available at: https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/
[Accessed 18 September 2025].
Sharma, R., n.d. What happens when you don't have a security certificate on your site?. [Online] 
Available at: https://www.aeserver.com/ssl-certificate-absence-risks/
[Accessed 19 September 2025].
terrabyte, 2024. Real-Life Data Breach Cases: What Happens When SSL Fails?. [Online] 
Available at: https://www.terrabytegroup.com/real-life-data-breach-cases-what-happens-when-ssl-fails/
[Accessed 20 September 2025].


