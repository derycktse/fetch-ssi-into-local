const fs = require('fs')
const program = require('commander')
let ss2 = require('ss2')

import { touchFolder } from './util'
import * as CONFIG  from '../config/'

program
    .version('1.0.1')
    .option('-i, --movieid', 'specify an movie id')
    .parse(process.argv)

if (!program.movieid) {
    console.log('请指定一部影片的ID')
    return false
}

let movieid = program.movieid
let movieHash = Math.floor(movieid / 1000)

/**
 * part 1 先从服务器将播放页拉回来
 */

//touch本地的播放页目录先
let playPageFolder =  CONFIG.localProjectDirPath +  movieHash
touchFolder(playPageFolder)



let Client = ss2.Client
let conn = new Client()
conn.on('ready', function(){

}).connect(CONFIG.sshConfig)