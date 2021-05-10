const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it ("should return name, when getName() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockSchool = "MIT"
        const mockIntern = new Intern(mockName , mockId , mockEmail, mockSchool);
        // Act
        const name = mockIntern.getName();
        // Assert
        expect(name).toStrictEqual(mockName);
    });

    it ("should return id, when getID() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockSchool = "MIT"
        const mockIntern = new Intern(mockName , mockId , mockEmail, mockSchool);
        // Act
        const id = mockIntern.getID();
        // Assert
        expect(id).toStrictEqual(mockId);
    });

    it ("should return id, when getEmail() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockSchool = "MIT"
        const mockIntern = new Intern(mockName , mockId , mockEmail, mockSchool);
        // Act
        const email = mockIntern.getEmail();
        // Assert
        expect(email).toStrictEqual(mockEmail);
    });

    it ("should return school, when getSchool() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockSchool = "MIT"
        const mockIntern = new Intern(mockName , mockId , mockEmail, mockSchool);
        // Act
        const school = mockIntern.getSchool();
        // Assert
        expect(school).toStrictEqual(mockSchool);
    });
})
