// cable.ts
import { createConsumer } from '@rails/actioncable';
const token = localStorage.getItem("userToken");  // Retrieve JWT token from localStorage
const cable = createConsumer(`ws://localhost:3000/cable?token=${token}`);  // Adjust WS URL accordingly
//const cable = createConsumer('ws://localhost:3000/cable'); // Update URL if needed

export default cable;
