import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

const credentialRepository = AppDataSource.getRepository(Credential);
export default credentialRepository;