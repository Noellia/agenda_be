BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Assignment" (
	"idContact"	INTEGER NOT NULL,
	"idDepartment"	INTEGER NOT NULL,
	"status"	TEXT NOT NULL,
	PRIMARY KEY("idContact","idDepartment"),
	FOREIGN KEY("idDepartment") REFERENCES "Department"("idDepartment"),
	FOREIGN KEY("idContact") REFERENCES "Contact"("idContact")
);
CREATE TABLE IF NOT EXISTS "Department" (
	"idDepartment"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"description"	TEXT NOT NULL,
	"status"	TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "Contact" (
	"idContact"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"firstName"	TEXT NOT NULL,
	"lastName"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	"gender"	TEXT NOT NULL,
	"birthDate"	TEXT NOT NULL,
	"phoneNumber"	TEXT NOT NULL,
	"address"	TEXT NOT NULL,
	"role"	TEXT NOT NULL,
	"note"	TEXT NOT NULL,
	"status"	TEXT NOT NULL
);
COMMIT;
