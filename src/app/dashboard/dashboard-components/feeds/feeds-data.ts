export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'você tem 4 tarefas pendentes.',
        time: 'Agora mesmo'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: 'Servidor nº 1 sobrecarregado.',
        time: '2 horas atrás'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: 'Novo pedido recebido.',
        time: '31 de maio'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: 'Novo usuário cadastrado.',
        time: '30 de maio'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        task: 'Você tem uma nova senha.',
        time: '21 de maio'
    },

] 