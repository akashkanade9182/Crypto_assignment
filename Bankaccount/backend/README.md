## Bankaccount/backend



# Deploy link :  https://rich-erin-sturgeon-suit.cyclic.app/bankaccount




## Routes

1) openAccount -
- route;-  /openaccount
- method:- POST
- data :- {name, gender, dob, email, mobile, address, initialBalance, adhar, pan}

2) deposite money -
- route;- /deposit/userId
- method:- PATCH
- data :- {amount}

3) wothdraw  money -
- route;-/withdraw/userId
- method:- PATCH
- data :- {amount}


4) Trandfer   money -
- route;-/transfer/userId
- method:- PATCH
- data :- {amount,toName}

5) delete account -
- route;-/delete/userId
- method:- DELETE


6)recieved   money -
- route;-/transfer/userId
- method:- PATCH
- data :- {amount,toName}


7)get statment  -
- route;-/userId
- method:- GET

8)Update KYC -
- route;-/updateaccount/useId
- method:- PATCH
- data :- {name, gender, dob, email, mobile, address, initialBalance, adhar, pan}


