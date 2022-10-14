import Diagram from "../Diagram/Diagram";

const CostDiagram = (props) =>{

    const diagramDataSets = [
        {label: 'ЯНВ', value: 0},
        {label: 'ФЕВ', value: 0},
        {label: 'МАР', value: 0},
        {label: 'АРП', value: 0},
        {label: 'МАЙ', value: 0},
        {label: 'ИЮН', value: 0},
        {label: 'ИЮЛ', value: 0},
        {label: 'АВГ', value: 0},
        {label: 'СЕН', value: 0},
        {label: 'ОКТ', value: 0},
        {label: 'НОЯ', value: 0},
        {label: 'ДЕК', value: 0}
    ];

    for(const cost of props.costs){
        const costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += cost.amount;
    }

    return <Diagram dataSets={diagramDataSets} />
}

export default CostDiagram;