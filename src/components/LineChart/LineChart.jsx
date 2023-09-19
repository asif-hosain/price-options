import {
    LineChart as LChart, Line, XAxis,
    YAxis
} from 'recharts';

const LineChart = () => {

    const subMarksData = [
        { "name": "John", "math_marks": 85, "physics_marks": 55, "chemistry_marks": 90 },
        { "name": "Jane", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 40 },
        { "name": "Michael", "math_marks": 95, "physics_marks": 60, "chemistry_marks": 75 },
        { "name": "Emily", "math_marks": 70, "physics_marks": 62, "chemistry_marks": 88 },
        { "name": "David", "math_marks": 78, "physics_marks": 90, "chemistry_marks": 75 },
        { "name": "Sarah", "math_marks": 60, "physics_marks": 95, "chemistry_marks": 42 },
        { "name": "Daniel", "math_marks": 95, "physics_marks": 90, "chemistry_marks": 92 },
        { "name": "Jennifer", "math_marks": 30, "physics_marks": 55, "chemistry_marks": 78 },
        { "name": "Christopher", "math_marks": 80, "physics_marks": 38, "chemistry_marks": 95 },
        { "name": "Jessica", "math_marks": 75, "physics_marks": 72, "chemistry_marks": 78 }
    ];


    return (
        <div>
            <LChart width={800} height={400} data={subMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey={"physics_marks"} stroke='purple'></Line>
                <Line dataKey="chemistry_marks" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;