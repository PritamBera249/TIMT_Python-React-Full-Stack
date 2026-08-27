function grade(m1, m2, m3, m4, m5) {
    let average = (m1 + m2 + m3 + m4 + m5) / 5;

    if (average >= 80)
        return "A";
    else if (average >= 60)
        return "B";
    else if (average >= 50)
        return "C";
    else if (average >= 40)
        return "D";
    else
        return "F";
}

console.log(grade(80, 75, 90, 85, 70));