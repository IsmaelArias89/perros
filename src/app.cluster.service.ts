//@ts-nocheck
import * as os from 'os';
import { Injectable } from '@nestjs/common';
import * as cluster from 'cluster';
import { Logger } from '@nestjs/common';

const TotalCPUs = os.cpus().length;
@Injectable()
export class AppClusterService {
  static clusterize(callback: Function, numCPUs: number = TotalCPUs): void {
    numCPUs = Math.min(numCPUs, TotalCPUs);
    if (cluster.isMaster) {
      Logger.log(`numCPUs used: ${numCPUs}/${TotalCPUs}`);
      Logger.log(`Master server started on ${process.pid}`);
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      cluster.on('exit', (worker, code, signal) => {
        Logger.log(`Worker ${worker.process.pid} died. Restarting`);
        cluster.fork();
      });
    } else {
      Logger.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
