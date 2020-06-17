import { CustomerReservasion } from './customerReservation.component';

describe('Customer Reservation component', () => {
    let customerService: CustomerReservasion;

    beforeEach(() => {
        customerService = new CustomerReservasion;
    }) 

    afterEach(() => {
        customerService = null;
    })
    
    it('should register customer / increase current customer count by 1', () => {
       let oldNumberCustomer = customerService.getCustomerCount();
       customerService.registerCustomer();
       let newNumberCustomer = customerService.getCustomerCount();
       expect(newNumberCustomer).toBe(oldNumberCustomer + 1);
    });

    it('should un-register customer / decrease current customer count by 1', () => {
        let oldNumberCustomer = customerService.getCustomerCount();
        customerService.unRegisterCustomer();
        let newNumberCustomer = customerService.getCustomerCount();
        expect(newNumberCustomer).toBe(oldNumberCustomer - 1);
     });
});