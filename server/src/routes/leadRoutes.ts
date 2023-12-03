import { Router, Request, Response } from 'express';
import { getAllLeads, updateLeadStatus } from '../db/leadQueries';

export const leadRoute = Router();

leadRoute.get('/leads', (req: Request, res: Response) => {
    getAllLeads((err, results) => {
      if (err) {
        console.error('Error fetching leads:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
leadRoute.post('/leads/:id/:status', (req: Request, res: Response) => {
    const leadId = req.params.id;
    const status = req.params.status;
    if (!['active', 'declined'].includes(status)) {
        res.status(400).json({ error: 'Invalid request' });
    }
    updateLeadStatus(leadId, status, (err) => {
      if (err) {
        console.error('Error accepting lead:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Lead accepted successfully' });
      }
    });
  });

export default leadRoute;
