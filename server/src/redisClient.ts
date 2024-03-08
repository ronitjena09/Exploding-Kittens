import { Client, Repository } from 'redis-om';
import { config } from 'dotenv';
config()


const redisClient = new Client();


(async () => {
    const redisUserName = 'default'
    const redisPassword = 'zDVvowloXOe2ScdbPtLcnvuHHGveWSuo';
    const url = "http://redis-18033.c259.us-central1-2.gce.cloud.redislabs.com:18033/"
    try{
    // await redisClient.open(`redis://${redisUserName}:${redisPassword}@${url}`)
    await redisClient.open(`redis://default:UbYie4e5w7szOTg5LUKnVbPshZEIsjIZ@redis-11781.c302.asia-northeast1-1.gce.cloud.redislabs.com:11781`)
    }  catch (error) {
        console.error('Error opening Redis connection:', error);
    }
})();



// redis://${process.env.username}:${process.env.passsword}@${connecctionstrong}

export { redisClient }
