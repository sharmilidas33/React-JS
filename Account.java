//Banking Problem.
public class Account {
    String name;
    int balance;

    void deposit(int amount){
        balance= balance+amount;   
        System.out.println("Amount deposited: "+amount+" & new balance is: "+balance);
    }

    void withdraw(int amount){
        if(balance>=amount){
            balance= balance- amount;
            System.out.println("Withdrawal successful! New Balance ="+balance);
        }
        else{
            System.out.println("Insufficient funds!");
        }
    }
    void checkBalance(){
        System.out.println(name+" has Rs "+balance+" in her account");
    }

    public static void main(String[] args) {
        Account account =new Account();
        account.name= "Sharmili";
        account.balance=20;
        account.deposit(5);
        account.withdraw(2);
        account.checkBalance();
    }
}
