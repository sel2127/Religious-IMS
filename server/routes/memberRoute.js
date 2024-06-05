import  express from 'express'
import { createMember, getAllMembers } from '../controllers/memberController.js';
const member=express.Router();

member.post('/api/member/create',createMember);
member.get('/api/members',getAllMembers);
export default member;