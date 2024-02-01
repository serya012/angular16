export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: 'R$71 mil',
        subtitle: 'Ganhos anuais'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: 'R$1 mil',
        subtitle: 'Reembolso concedido'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '156',
        subtitle: 'Projeto Anual'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '5210',
        subtitle: 'Vendas semanais'
    },

] 