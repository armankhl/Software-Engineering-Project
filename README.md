# TA-ship: A University Teaching Assistant Management Platform

A comprehensive web application developed as a final project for our Software Engineering course at the University of Isfahan. This platform streamlines the process of recruiting and managing Teaching Assistants (TAs), creating a centralized hub for professors and students.
<table>
  <tr>
    <td align="center"><b>Student Dashboard</b></td>
    <td align="center"><b>Instructor Dashboard</b></td>
  </tr>
  <tr>
    <td><img width="400" alt="Student Home Page" src="https://github.com/user-attachments/assets/d6892492-62bf-472d-b688-34f6f2f05161"></td>
    <td><img width="400" alt="Instructor Home Page" src="https://github.com/user-attachments/assets/7a1fed98-39ef-4d17-af04-952f482c5083"></td>
  </tr>
</table>

## 📋 About The Project

Finding and applying for Teaching Assistant positions at a university can often be a fragmented process, relying on emails and word-of-mouth. This project solves that problem by providing a dedicated platform where:

*   **Professors** can post TA vacancies for their courses, specify requirements, and review applications from students.
*   **Students** can easily search for available TA positions, view details, upload their resumes, and apply directly through the platform.

The system is designed to enhance efficiency, transparency, and communication between faculty and the student body.

## ✨ Key Features

*   **User Authentication:** Secure registration and login system for both students and professors.
*   **Profile Management:** Users can create and update their personal profiles. Students can upload their resumes.
*   **Job Posting:** Professors can create, edit, and delete TA job postings with specific requirements (e.g., minimum GPA).
*   **Job Discovery & Application:** Students have a dedicated dashboard to search for and apply to TA positions.
*   **Application Management:** Professors can view, approve, or reject student applications.
*   **Responsive Design:** A user-friendly and responsive interface for a seamless experience on any device.

## 🛠️ Tech Stack & Architecture

This project is built with a modern, decoupled architecture, featuring a separate frontend and backend for scalability and maintainability.

*   **Backend:**
    *   **Framework:** Django & Django REST Framework
    *   **Database:** PostgreSQL
    *   **API:** RESTful API for all client-server communication.
*   **Frontend:**
    *   **Library:** React.js
    *   **Styling:** Tailwind CSS
*   **DevOps & Deployment:**
    *   **Containerization:** Docker & Docker Compose
*   **Design & Prototyping:**
    *   **UI/UX:** Adobe XD

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Docker and Docker Compose installed on your machine.
*   [Install Docker](https://docs.docker.com/get-docker/)
*   [Install Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/armankhl/Software-Engineering-Project.git
    cd Software-Engineering-Project
    ```
2.  **Configure Environment Variables:**
    The `docker-compose.yml` file expects certain environment variables for the database connection. You may need to create a `.env` file or adjust the settings in `backend/settings.py` if required.

3.  **Build and Run with Docker Compose:**
    This command will build the images for the frontend and backend services and start the containers.
    ```sh
    docker-compose up --build
    ```
4.  **Run Database Migrations:**
    In a new terminal, execute the following command to apply the Django database migrations.
    ```sh
    docker-compose exec backend python manage.py migrate
    ```
5.  **Access the Application:**
    *   **Frontend:** Open your browser and navigate to `http://localhost:3000`
    *   **Backend API:** The API is accessible at `http://localhost:8000`

## My Contributions

As a key member of the UI/UX and documentation team, my primary responsibilities were to ensure the application was intuitive, user-friendly, and well-documented.

*   **Led the Complete UI/UX Design:** I was responsible for designing the user interface and user experience across the entire application to improve usability and visual appeal.
*   **Frontend Development:** Implemented the front-end for key application pages, including the professor profile and user homepages, using React.js and Tailwind CSS.
*   **Prototyping & Design:** Utilized Adobe XD to create wireframes and high-fidelity prototypes, which served as the blueprint for the frontend development team.
*   **Project Documentation:** Authored the comprehensive final project documentation, outlining the system architecture, features, and user guides.

## 👥 Team Members

This project was a collaborative effort by a dedicated team of students:

*   **Amin Kiani**
*   **Yazdan Afra**
*   **Arman Khalili** (Me)
*   **Matin Asab al-Zohour**
*   **Mohammad Mahdi Ketabchi**
*   **Mohammad Jafari**
*   **Ali Hosseini Fard**

## Acknowledgments

*   A special thanks to our professor, **Dr. Fatemi**, for his guidance and support throughout this course.
*   **University of Isfahan, Faculty of Computer Engineering**.
