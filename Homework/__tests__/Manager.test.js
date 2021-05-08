const Manager = require('../lib/Manager');

describe("manager class", () => {
    it ("should return name, when getName() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockOfficeNumber = "8888 8888"
        const mockManager = new Manager(mockName , mockId , mockEmail, mockOfficeNumber);
        // Act
        const name = mockManager.getName();
        // Assert
        expect(name).toStrictEqual(mockName);
    });

    it ("should return id, when getID() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockOfficeNumber = "8888 8888"
        const mockManager = new Manager(mockName , mockId , mockEmail, mockOfficeNumber);
        // Act
        const id = mockManager.getID();
        // Assert
        expect(id).toStrictEqual(mockId);
    });


    it ("should return id, when getEmail() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockOfficeNumber = "8888 8888"
        const mockManager = new Manager(mockName , mockId , mockEmail, mockOfficeNumber);
        // Act
        const email = mockManager.getEmail();
        // Assert
        expect(email).toStrictEqual(mockEmail);
    });

    it ("should return officerNumber, when getOfficerNumber() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockOfficeNumber = "8888 8888"
        const mockManager = new Manager(mockName , mockId , mockEmail, mockOfficeNumber);
        // Act
        const officeNumber = mockManager.getOfficeNumber();
        // Assert
        expect(officeNumber).toStrictEqual(mockOfficeNumber);
    });
})
