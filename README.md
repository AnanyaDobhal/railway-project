# 🚆 Railway Optimization System 

The **Railway Optimization System** is a web + IoT-based project that helps in finding the **shortest path between two stations** using a modified **Dijkstra algorithm**.
If any busy station lies in between the route, the system automatically finds the next shortest path avoiding that station.

This project was developed as part of Project Based Learning (PBL) in B.Tech CSE, 4th Semester by a 4-member team.

# 📸 Screenshots & Demo
Web Application

Hardware Prototype:
|Breadboard Setup	|LED Indicators   |

# ✨ Features

✅ Shortest path calculation using **Dijkstra Algorithm**

✅ Support for **busy stations** (reroutes dynamically)

✅ Interactive React-based frontend

✅ **Node.js + Express backend** with inbuilt graph (graph.js)

✅ **IoT hardware integration**: ESP + LEDs show live route status

🟢 Green LED → Active train route

🔴 Red LED → Busy station

# 🛠️ Tech Stack

**Frontend**: React, JavaScript, HTML, CSS
**Backend**: Node.js, Express.js
**Algorithm**: Modified Dijkstra’s Algorithm
**IoT Hardware**: ESP Module, Breadboard, LEDs, Jumper Wires
**Other**: Hardcoded Graph (graph.js)

# ⚙️ Setup & Installation
## 1. Clone the Repository

`git clone https://github.com/your-username/railway-optimization-system.git
cd railway-optimization-system
`

## 2. Backend Setup (Node.js)
`cd railway-backend
npm install
node index.js
`

## 3.Frontend Setup (React)
`cd railway-backend
npm install
node index.js
`

## 4. IoT Setup

Upload Arduino/ESP code to your microcontroller

Connect LEDs to show status:
    :Green → Route available
    :Red → Busy station

# 📂 Project Structure
railway-optimization-system/
│── railway-frontend/   # React Frontend
│── railway-backend/    # Node.js Backend
│   ├── graph.js        # Inbuilt railway graph
│   ├── index.js        # Server entry
│── hardware/           # IoT setup (ESP + LEDs)
│── README.md           # Documentation

# 👨‍💻 Team Members

>Vivek Semwal

>Ananya Dobhal

>Diya Pundir

>Priyanshu Kundliya

# 🚀 Future Improvements

- Live railway traffic data instead of hardcoded graph

- Integration with Google Maps API for visualization

- Real-time IoT alerts via mobile app

# 📜 License

This project is for educational purposes (PBL Project, B.Tech 4th Sem).
