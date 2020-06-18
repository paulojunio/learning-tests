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

     /** Um pouco sobre AAA( Arrange Act Assert )  
       */
     
    it('Testing room is reserved or not', () => {
        //Arrange 
        let custReserve = new CustomerReservasion(); // O ideal é sempre utilizar um mock!!!

        //Act
        let isReserved = custReserve.reserveRoom();

        //Assert
        expect(isReserved).toBeTruthy(true);
    })

});