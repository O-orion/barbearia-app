export interface Usuario {
    id: string;
    name: string;
    email: string;
    genero: string;
    dataNasci: Date;
    bio: string;
    profilePicture: string;
    avaliacoes?: Avaliacoes[];
    barbearias?: Barbearia[];
    createdAt?: Date;
    updatedAt?: Date;

}

export interface Barbearia {
    id: string;
    idUser: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    website?: string;
    description: string;
    rating?: number;
    openingHours: string;
    closeingHours: string;
    location: { lat: number; lng: number } | null;
    images: string[];
    owner?: Usuario;
    servicos?: Servicos[];
    avaliacoes?: Avaliacoes[];
    createdAt?: Date;
    updateAt?: Date;
}

export interface Servicos {
    id?: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    image: string;
    barberId: string;
    barberia?: Barberia;
    createdAt?: Date;
    updateAt?: Date;
}

export interface Avaliacoes { 
    id?: string;
    rating: number;
    comment: string;
    userId: string;
    barberId: string;
    usuario?: Usuario;
    barberia?: Barberia;
    createdAt?: Date;
    updateAt?: Date;
}