const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it ("should return name, when getName() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockGitHub = "Susan@github.com"
        const mockEngineer = new Engineer(mockName , mockId , mockEmail, mockGitHub);
        // Act
        const name = mockEngineer.getName();
        // Assert
        expect(name).toStrictEqual(mockName);
    });

    it ("should return id, when getID() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockGitHub = "Susan@github.com"
        const mockEngineer = new Engineer(mockName , mockId , mockEmail, mockGitHub);
        // Act
        const id = mockEngineer.getID();
        // Assert
        expect(id).toStrictEqual(mockId);
    });

    it ("should return id, when getEmail() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockGitHub = "Susan@github.com"
        const mockEngineer = new Engineer(mockName , mockId , mockEmail, mockGitHub);
        // Act
        const email = mockEngineer.getEmail();
        // Assert
        expect(email).toStrictEqual(mockEmail);
    });

    it ("should return github, when getGitHub() is called", () => {
        // Arrange
        const mockName = "Susan"
        const mockId = 1
        const mockEmail = "a@b.com"
        const mockGitHub = "Susan@github.com"
        const mockEngineer = new Engineer(mockName , mockId , mockEmail, mockGitHub);
        // Act
        const gitHub = mockEngineer.getGitHub();
        // Assert
        expect(gitHub).toStrictEqual(mockGitHub);
    });
})
