import { EntityEventos } from "../../eventos/interface/entity-eventos";
import { EntitySalones } from "../../salones/interface/entity-salones";

export interface EntityAgendas {
    id_agenda: number,
    id_evento: EntityEventos | null,
    id_salon: EntitySalones | null,
    fecha_inicio: Date,
    hora_inicio: Date,
    fecha_fin: Date,
    hora_fin: Date,
    fecha_reserva: Date,
}
