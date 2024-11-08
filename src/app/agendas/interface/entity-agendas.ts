import { EntityEventos } from "../../eventos/interface/entity-eventos";
import { EntitySalones } from "../../salones/interface/entity-salones";

export interface EntityAgendas {
    id_agenda: number,
    id_evento: number,
    id_salon: number,
    fecha_hora_evento: Date,
    duracion_horas_evento: number,
    fecha_reserva: Date | null,
    ids_personal_reservado: number[],
    ids_inmuebles_reservados: number[],
}
