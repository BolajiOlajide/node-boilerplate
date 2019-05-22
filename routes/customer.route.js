import { Router } from 'express';

// controllers
import CustomerCtrl from '../controllers/customer.controller';

// middlewares
import {
  checkUserPayload,
  validateEmail,
  checkOptionalUserPayload
} from '../middleware';


const router = Router();

router.route('/')
  .post(
    checkUserPayload(['name', 'email', 'password']),
    validateEmail,
    CustomerCtrl.createCustomer
  )
  .get(CustomerCtrl.fetchCustomer)
  .put(
    checkUserPayload(['name', 'email']),
    validateEmail,
    checkOptionalUserPayload(['password', 'day_phone', 'eve_phone', 'mob_phone']),
    CustomerCtrl.updateCustomer
  );

router.route('/login')
  .post(
    checkUserPayload(['email', 'password']),
    validateEmail,
    CustomerCtrl.signInCustomer
  );

export default router;
