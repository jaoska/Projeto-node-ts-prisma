import { CreateUserDTO } from "./users/dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute ({name, email}: CreateUserDTO) {
        // Verificar se o usuario existe
        // Se existir, acusar erro
        // Se não criar usuario
    }
}