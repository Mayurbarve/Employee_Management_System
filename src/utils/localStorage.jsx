

const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Finish report",
          "taskDescription": "Complete the Q4 financial report",
          "taskDate": "2024-11-01",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client meeting",
          "taskDescription": "Meet with client to discuss project progress",
          "taskDate": "2024-10-28",
          "category": "Client Relations"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Submit documentation",
          "taskDescription": "Submit project documentation for review",
          "taskDate": "2024-10-25",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Code review",
          "taskDescription": "Review the codebase for improvements",
          "taskDate": "2024-11-03",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team feedback",
          "taskDescription": "Gather team feedback for Q3 project",
          "taskDate": "2024-10-27",
          "category": "Team Collaboration"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Market research",
          "taskDescription": "Research competitors for the upcoming project",
          "taskDate": "2024-11-02",
          "category": "Research"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Inventory check",
          "taskDescription": "Check inventory levels in the warehouse",
          "taskDate": "2024-10-26",
          "category": "Operations"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create presentation",
          "taskDescription": "Prepare presentation slides for team meeting",
          "taskDate": "2024-11-05",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team meeting",
          "taskDescription": "Weekly team meeting to discuss progress",
          "taskDate": "2024-10-25",
          "category": "Meeting"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Schedule training",
          "taskDescription": "Organize training sessions for new hires",
          "taskDate": "2024-11-10",
          "category": "Training"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Policy update",
          "taskDescription": "Update company policy document",
          "taskDate": "2024-10-29",
          "category": "Documentation"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];


  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
      const employees = JSON.parse(localStorage.getItem('employees'))
      const admin = JSON.parse(localStorage.getItem('admin'))

      return {employees,admin}
  }