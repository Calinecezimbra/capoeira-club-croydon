CREATE TABLE `registrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`classType` varchar(100) NOT NULL,
	`parentName` varchar(255) NOT NULL,
	`parentEmail` varchar(320) NOT NULL,
	`parentPhone` varchar(50),
	`childName` varchar(255) NOT NULL,
	`childAge` int,
	`additionalInfo` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `registrations_id` PRIMARY KEY(`id`)
);
