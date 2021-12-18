# Gramoday-Assignment

## Steps to run
1. Clone repo
```
git clone https://github.com/aadarsh-128/Gramoday-Assignment.git
```
2. Install NPM packages
```
npm install
```
3. Make http request through Postman
```
Post Request: localhost:3000/reports

Sample data
{
    "userID":"user-2",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "cmdtyID": "cmdty-1",
    "marketType": "Mandi",
    "cmdtyName": "Potato",
    "priceUnit":"Quintal",
    "convFctr": 100,
    "minPrice": 1600,
    "maxPrice": 1800
}
```
```
Get Request : localhost:3000/reports/cmdtyID
```
## Output

* Request 1
![This is an image](/misc/req-1.png)
* Request 2
![This is an image](/misc/req-2.png)
* Response 1
![This is an image](/misc/res-1.png)
