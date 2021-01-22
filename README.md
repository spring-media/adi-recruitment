## Project assignmenet for Software Engineer ( Data focus )

Task meant to be solved within 3-4 hours, please take your time, you have a week for the final submission. 

### Task:

I’ve prepared two mock services for you and they mimics some external report services.

[Service A](https://run.mocky.io/v3/9a01a1b9-26e1-4c8a-84db-d534352e1461)

[Service B](https://run.mocky.io/v3/ba026992-281a-42a6-8447-ae1c8a04106e)

Create a HTTP service that reads the data from the external services and exposes an endpoint from which I would be able to get the combined mean and sum of the impressions.

Expected result:
```sh
➜  ~ curl http://localhost:8000/
{"mean":1781.85,"sum":220950}
```

No language or library requirements from our side, use what you know and feel comfortable with! 
When you’re ready, create a pull request with your solution. 
Please do not overcomplicate the task, but still it's expected to see some tests and have a clean code.
