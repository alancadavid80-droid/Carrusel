const topics = {
    atrapagemas: {
        category: "Modo de juego",
        title: "Atrapagemas",
        lead: "Un modo de equipo donde asegurar las gemas y saber cuándo replegarse importa tanto como ganar terreno.",
        objective: "Controla la zona central para recoger las gemas que aparecen. El equipo debe conservar la ventaja hasta que el contador termine.",
        steps: [
            "Presiona el centro con tus compañeros y evita avanzar sin apoyo.",
            "Si llevas varias gemas, juega a mantener distancia y protegerte.",
            "Cuando el equipo active la cuenta regresiva, prioriza defender antes que perseguir eliminaciones."
        ],
        takeaway: "La persona que lleva las gemas es clave: protégela y no arriesgues la ventaja por una persecución.",
        icon: "bi-gem",
        tone: "yellow",
        group: "modos",
        groupLabel: "modos",
        back: "modos",
        related: ["balon-brawl", "noqueo", "supervivencia"]
    },
    "balon-brawl": {
        category: "Modo de juego",
        title: "Balón Brawl",
        lead: "Un partido de tres contra tres que combina posicionamiento, defensa y oportunidades para llevar el balón a la portería rival.",
        objective: "Avanza con el balón y marca en la portería contraria. También puedes despejar el camino para un compañero mejor ubicado.",
        steps: [
            "Abre espacio antes de intentar avanzar con el balón.",
            "Pasa o dispara el balón cuando un compañero tenga una oportunidad más clara.",
            "No dejes tu portería desprotegida por perseguir una jugada lejana."
        ],
        takeaway: "No hace falta llevar el balón todo el tiempo: crear una oportunidad para el equipo también es jugar bien.",
        icon: "bi-dribbble",
        tone: "coral",
        group: "modos",
        groupLabel: "modos",
        back: "modos",
        related: ["atrapagemas", "noqueo", "supervivencia"]
    },
    noqueo: {
        category: "Modo de juego",
        title: "Noqueo",
        lead: "Un enfrentamiento por rondas donde cada decisión cuenta: en una ronda, caer significa dejar al equipo en inferioridad.",
        objective: "Elimina al equipo rival para ganar la ronda. Si nadie cae, el resultado puede depender de quién conserve más salud al terminar el tiempo.",
        steps: [
            "Usa paredes y distancia para evitar recibir daño gratuito.",
            "Coordina el ataque para no enfrentarte a todo el equipo rival por separado.",
            "Si tu equipo tiene ventaja, evita exponerte sin necesidad."
        ],
        takeaway: "La paciencia suele ser más útil que lanzarse al primer intercambio: mantente con vida y busca una ventaja segura.",
        icon: "bi-crosshair",
        tone: "blue",
        group: "modos",
        groupLabel: "modos",
        back: "modos",
        related: ["atrapagemas", "balon-brawl", "supervivencia"]
    },
    supervivencia: {
        category: "Modo de juego",
        title: "Supervivencia",
        lead: "Sobrevive en solitario o en dúo mientras el espacio seguro se reduce y el mapa obliga a los rivales a acercarse.",
        objective: "Mantente en la partida hasta el final. Las cajas pueden dar potenciadores, pero acercarte a ellas también puede exponerte.",
        steps: [
            "Observa el mapa y planifica por dónde moverte antes de que cierre la zona.",
            "Recoge potenciadores cuando puedas hacerlo sin regalar una eliminación.",
            "En dúo, conserva una distancia que permita ayudar a tu compañero."
        ],
        takeaway: "Sobrevivir también es una estrategia: no todas las peleas merecen la pena.",
        icon: "bi-shield-shaded",
        tone: "green",
        group: "modos",
        groupLabel: "modos",
        back: "modos",
        related: ["atrapagemas", "balon-brawl", "noqueo"]
    },
    "rol-dano": {
        category: "Estilo de juego",
        title: "Daño",
        lead: "Los brawlers orientados al daño buscan presionar al rival y convertir una buena oportunidad en una ventaja para el equipo.",
        objective: "Aprovecha el alcance, la cadencia y el patrón de ataque de tu brawler para amenazar a los rivales sin abandonar el objetivo del modo.",
        steps: [
            "Aprende el alcance y la forma del ataque principal de tu personaje.",
            "Dispara cuando el rival esté comprometido o tenga una ruta de escape limitada.",
            "Cambia de posición después de presionar para no ser un blanco fácil."
        ],
        takeaway: "Presionar no significa perseguir: haz que el rival retroceda y ayuda a tu equipo a ocupar espacio.",
        icon: "bi-lightning-charge-fill",
        tone: "coral",
        group: "roles",
        groupLabel: "brawlers",
        back: "brawlers",
        related: ["rol-control", "rol-tanque", "rol-apoyo"]
    },
    "rol-control": {
        category: "Estilo de juego",
        title: "Control",
        lead: "El control consiste en limitar rutas y zonas para que al rival le resulte difícil avanzar o acercarse al objetivo.",
        objective: "Usa ataques de área, obstáculos o presión constante para mantener a los rivales lejos de una zona importante.",
        steps: [
            "Identifica qué parte del mapa necesita controlar tu equipo.",
            "Coloca tus ataques donde el rival quiera pasar, no solo donde está ahora.",
            "Aprovecha arbustos y paredes para dificultar el avance contrario."
        ],
        takeaway: "Controlar el mapa puede dar valor incluso cuando no consigues una eliminación.",
        icon: "bi-bullseye",
        tone: "blue",
        group: "roles",
        groupLabel: "brawlers",
        back: "brawlers",
        related: ["rol-dano", "rol-tanque", "rol-apoyo"]
    },
    "rol-tanque": {
        category: "Estilo de juego",
        title: "Tanque",
        lead: "Los tanques suelen destacar a corta distancia y pueden absorber presión para que el equipo tenga espacio para avanzar.",
        objective: "Aprovecha salud y presencia para ocupar terreno, pero elige el momento de acercarte según el rival y el mapa.",
        steps: [
            "Usa paredes y arbustos para acercarte con menos riesgo.",
            "Avanza cuando tus compañeros puedan apoyarte o los rivales hayan gastado ataques.",
            "Vuelve a cubrirte si el equipo pierde posición."
        ],
        takeaway: "Tener mucha salud no significa que debas entrar solo: un avance coordinado vale más.",
        icon: "bi-shield-fill",
        tone: "green",
        group: "roles",
        groupLabel: "brawlers",
        back: "brawlers",
        related: ["rol-dano", "rol-control", "rol-apoyo"]
    },
    "rol-apoyo": {
        category: "Estilo de juego",
        title: "Apoyo",
        lead: "El apoyo ayuda a que el equipo siga activo mediante curación, mejoras, protección u otras utilidades propias de cada brawler.",
        objective: "Refuerza a tus compañeros y usa tus habilidades para que puedan mantenerse en la pelea o completar el objetivo.",
        steps: [
            "Mantente lo bastante cerca para ayudar, sin agruparte con todo el equipo.",
            "Usa tus habilidades cuando puedan cambiar un enfrentamiento, no solo al recargarse.",
            "Observa quién necesita ayuda y qué objetivo está en riesgo."
        ],
        takeaway: "El apoyo eficaz anticipa lo que el equipo necesitará y se posiciona antes de que sea tarde.",
        icon: "bi-heart-pulse-fill",
        tone: "purple",
        group: "roles",
        groupLabel: "brawlers",
        back: "brawlers",
        related: ["rol-dano", "rol-control", "rol-tanque"]
    },
    "consejo-objetivo": {
        category: "Consejo para empezar",
        title: "Lee el objetivo",
        lead: "Cada modo recompensa acciones distintas. Identificar la condición de victoria ayuda a decidir dónde estar y qué hacer.",
        objective: "Antes de pelear, pregúntate qué acción acerca más a tu equipo a ganar: recoger, defender, marcar o sobrevivir.",
        steps: [
            "Mira el nombre y la explicación del modo al entrar en la partida.",
            "Comprueba el estado del objetivo durante la partida, no solo las eliminaciones.",
            "Cambia de plan si el equipo gana ventaja o necesita recuperar terreno."
        ],
        takeaway: "Una buena jugada es la que ayuda a cumplir el objetivo, aunque no termine en una eliminación.",
        icon: "bi-flag-fill",
        tone: "yellow",
        group: "consejos",
        groupLabel: "consejos",
        back: "consejos",
        related: ["consejo-municion", "consejo-cobertura", "consejo-equipo"]
    },
    "consejo-municion": {
        category: "Consejo para empezar",
        title: "Administra la munición",
        lead: "Los ataques tienen recarga. Disparar sin pensar puede dejarte sin respuesta justo cuando aparece una oportunidad.",
        objective: "Conserva suficientes ataques para defenderte o aprovechar una apertura, en lugar de vaciar la munición hacia un rival fuera de alcance.",
        steps: [
            "Observa la distancia y el movimiento del rival antes de atacar.",
            "Prueba el tiempo de recarga de tu brawler en partidas normales.",
            "Si el rival se retira, recarga mientras ocupas una posición útil."
        ],
        takeaway: "Un disparo bien calculado puede valer más que varios ataques lanzados a ciegas.",
        icon: "bi-bullseye",
        tone: "coral",
        group: "consejos",
        groupLabel: "consejos",
        back: "consejos",
        related: ["consejo-objetivo", "consejo-cobertura", "consejo-equipo"]
    },
    "consejo-cobertura": {
        category: "Consejo para empezar",
        title: "Usa la cobertura",
        lead: "Muros y arbustos no son decoración: afectan las líneas de tiro, el movimiento y la información que tiene el rival.",
        objective: "Muévete entre coberturas para reducir el tiempo que pasas expuesto y crear rutas de ataque más seguras.",
        steps: [
            "Acércate usando muros cuando el rival tenga ataques de largo alcance.",
            "Usa arbustos para ocultar tu posición, pero recuerda que los rivales pueden revisar la zona.",
            "Evita quedarte atrapado contra un borde cuando la zona segura cambie."
        ],
        takeaway: "Antes de cruzar un espacio abierto, busca una ruta que te deje llegar a otra cobertura.",
        icon: "bi-tree-fill",
        tone: "green",
        group: "consejos",
        groupLabel: "consejos",
        back: "consejos",
        related: ["consejo-objetivo", "consejo-municion", "consejo-equipo"]
    },
    "consejo-equipo": {
        category: "Consejo para empezar",
        title: "Juega con tu equipo",
        lead: "La coordinación no siempre requiere hablar: compartir espacio, cubrir rutas y evitar dejar a alguien aislado ya ayuda mucho.",
        objective: "Combina las fortalezas del equipo para que una persona pueda avanzar mientras otra controla o protege.",
        steps: [
            "Mantén una distancia que permita ayudar sin recibir el mismo ataque de área.",
            "No persigas a un rival si eso deja libre el objetivo principal.",
            "Si un compañero retrocede, adapta tu posición en lugar de avanzar sin apoyo."
        ],
        takeaway: "Una ventaja compartida suele ser más fácil de conservar que una jugada individual arriesgada.",
        icon: "bi-people-fill",
        tone: "blue",
        group: "consejos",
        groupLabel: "consejos",
        back: "consejos",
        related: ["consejo-objetivo", "consejo-municion", "consejo-cobertura"]
    }
};

const topicId = new URLSearchParams(window.location.search).get("tema");
const topic = topics[topicId];

if (!topic) {
    document.querySelector("#detailCategory").textContent = "TEMA NO ENCONTRADO";
    document.querySelector("#detailTitle").textContent = "Volvamos a la guía";
    document.querySelector("#detailLead").textContent = "No encontramos esa opción. Elige un modo, un rol o un consejo desde la página principal.";
    document.querySelector("#detailObjective").textContent = "Usa el enlace para regresar a la guía de Brawl Stars.";
    document.querySelector("#detailTakeaway").textContent = "La guía principal reúne todas las opciones disponibles.";
    document.querySelector("#detailBreadcrumb").href = "index.html";
    document.querySelector("#detailMoreLink").href = "index.html";
    document.querySelector("#backToGuide").href = "index.html";
} else {
    document.title = `${topic.title} | Brawl Guide`;
    document.querySelector('meta[name="description"]').content = topic.lead;
    document.querySelector("#detailPage").dataset.tone = topic.tone;
    document.querySelector("#detailCategory").textContent = topic.category;
    document.querySelector("#detailTitle").textContent = topic.title;
    document.querySelector("#detailLead").textContent = topic.lead;
    document.querySelector("#detailObjective").textContent = topic.objective;
    document.querySelector("#detailTakeaway").textContent = topic.takeaway;
    document.querySelector("#detailIcon").className = `bi ${topic.icon}`;
    const sectionUrl = `index.html#${topic.back}`;
    document.querySelector("#detailBreadcrumb").href = sectionUrl;
    document.querySelector("#detailCategoryBack").textContent = topic.groupLabel;
    document.querySelector("#detailMoreLink").href = sectionUrl;
    document.querySelector("#backToGuide").href = sectionUrl;

    const stepsList = document.querySelector("#detailSteps");
    topic.steps.forEach((step, index) => {
        const item = document.createElement("li");
        const number = document.createElement("span");
        const text = document.createElement("p");
        number.className = "detail-step-number";
        number.textContent = String(index + 1).padStart(2, "0");
        text.textContent = step;
        item.append(number, text);
        stepsList.append(item);
    });

    const relatedLinks = document.querySelector("#relatedLinks");
    topic.related.forEach((relatedId) => {
        const relatedTopic = topics[relatedId];
        const link = document.createElement("a");
        link.href = `detalle.html?tema=${encodeURIComponent(relatedId)}`;
        link.textContent = relatedTopic.title;
        relatedLinks.append(link);
    });
}
