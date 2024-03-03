const crypto = require("crypto")

const key = crypto.randomBytes(32)
const inital_value = crypto.randomBytes(16)

const encrypter = (message)=>{
    const cypher = crypto.createCipheriv('aes-256-cbc',key,inital_value)
    const enc_message = cypher.update(message,'utf-8','hex')+cypher.final('hex')
    return enc_message
}

const decrypter = (encrypted_message)=>{
    const decypher = crypto.createDecipheriv('aes-256-cbc',key,inital_value)
    const dec_message = decypher.update(encrypted_message,'hex','utf-8')+decypher.final('utf8')
    return dec_message
}


const message = 'a quick brown fox jumps over the lazy dog. and some of the people are not afraid of lion.'

const enc_message = encrypter(message)
console.log('Encrypted Message :  '+enc_message)

const dec_message = decrypter(enc_message)
console.log('Decrypted Message :  '+dec_message)






const chalk = require("chalk")
console.log(chalk.yellow("hello"));
console.log(chalk.blue("hello"));
console.log(chalk.red("hello"));
console.log(chalk.black("hello"));
console.log(chalk.bgBlue("hello"));
console.log(chalk.bgRed("hello"));