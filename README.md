## Project assignmenet for Software Engineer ( Data focus )

The task should not take you longer than 3-4 hours. Please take your time, you have one week for the final submission

### Task:

We've prepared two mock services for you, which mimic some external report services.

[Service A](https://run.mocky.io/v3/9a01a1b9-26e1-4c8a-84db-d534352e1461)

[Service B](https://run.mocky.io/v3/ba026992-281a-42a6-8447-ae1c8a04106e)

Create a HTTP service that reads the data from the external services and exposes an endpoint from which we would be able to get the combined mean and sum of the impressions.

Expected result:
```sh
➜  ~ curl http://localhost:8000/
{"mean":1721.85,"sum":213420}
```

No language or library requirements from our side, use what you know and feel comfortable with!
When you’re ready, post your solution on github (can be public if you do not put any company related information inside) and send Michal the link as an answer to this email.
Please do not overcomplicate the task, but still it's expected to see some tests and have a clean code.
