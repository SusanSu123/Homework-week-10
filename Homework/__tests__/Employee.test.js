const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it ("should return name, when getName() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockEmployee = new Employee(mockName , mockId , mockEmail );
        // Act
        const name = mockEmployee.getName();
        // Assert
        expect(name).toStrictEqual(mockName);
    });

    it ("should return id, when getID() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockEmployee = new Employee(mockName , mockId , mockEmail );
        // Act
        const id = mockEmployee.getID();
        // Assert
        expect(id).toStrictEqual(mockId);
    });

    it ("should return id, when getID() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockEmployee = new Employee(mockName , mockId , mockEmail );
        // Act
        const id = mockEmployee.getID();
        // Assert
        expect(id).toStrictEqual(mockId);
    });
})
