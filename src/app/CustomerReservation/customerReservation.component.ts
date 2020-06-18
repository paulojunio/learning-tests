export class CustomerReservasion {
    private hotelRoomCapacity = 30;
    private customerCount = 10;

    registerCustomer() {
        this.customerCount++;
    }

    unRegisterCustomer() {
        this.customerCount--;
    }

    getHotelRoomCapacity() {
        return this.hotelRoomCapacity;
    }

    getCustomerCount() {
        return this.customerCount;
    }

    reserveRoom(): boolean {
        if(this.customerCount < this.hotelRoomCapacity){
            this.customerCount++;
            return true;
        }
        return false;
    }
}