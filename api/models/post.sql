CREATE TABLE `forum-app`.`Post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `parentPostId` INT NULL,
  `createdDate` DATETIME NOT NULL,
  `updatedDate` DATETIME NULL,
  `postTitle` VARCHAR(45) NULL,
  `postContent` VARCHAR(500) NULL,
  PRIMARY KEY (`id`));
