export type AppRole = 'customer' | 'barber' | 'admin' | 'owner' | null;

export interface BarberDto {
  id: string;
  name: string;
  photoUrl?: string;
  specialties: string[];
  nextAvailable?: string; // ISO datetime
}

export interface ServiceItemDto {
  id: string;
  name: string;
  durationMin: number;
  price: number;
  barberId?: string;
}

export interface AvailabilitySlotDto {
  start: string; // ISO
  end: string;   // ISO
}

export interface BookingCreateRequestDto {
  barberId: string;
  serviceId: string;
  start: string; // ISO datetime
  name: string;
  email: string;
  phone: string;
}

export interface BookingCreateResponseDto {
  id: string;
  status: 'confirmed' | 'pending';
}
