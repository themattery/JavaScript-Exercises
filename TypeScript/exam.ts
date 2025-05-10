type AnswerValues = { [key: string]: string };
type Weight = { [key: string]: number };

interface Answer {
  values: AnswerValues;
  grade?: number;
}

export class Exam {
  private weight: Weight;
  private answer: Answer;
  private exams: Answer[] = [];

  constructor(answer: Answer, weight: Weight) {
    this.weight = weight;
    this.answer = answer;
  }

  add(exam: Answer): void {
    exam.grade = Object.keys(exam.values).reduce((total, q) => {
      return (
        total + (exam.values[q] === this.answer.values[q] ? this.weight[q] : 0)
      );
    }, 0);

    this.exams.push(exam);
  }

  avg(): number {
    const sum = this.exams.reduce((sum, exam) => sum + (exam.grade ?? 0), 0);
    return this.exams.length > 0 ? sum / this.exams.length : 0;
  }

  min(count: number = 1): number[] {
    const grades = this.exams.map((exam) => exam.grade ?? 0);
    grades.sort((a, b) => a - b);
    return grades.slice(0, count);
  }

  max(count: number = 1): number[] {
    const grades = this.exams.map((exam) => exam.grade ?? 0);
    grades.sort((a, b) => a - b);
    return grades.slice(-count);
  }

  lt(limit: number): number[] {
    return this.exams
      .map((exam) => exam.grade ?? 0)
      .filter((grade) => grade < limit);
  }

  gt(limit: number): number[] {
    return this.exams
      .map((exam) => exam.grade ?? 0)
      .filter((grade) => grade > limit);
  }
}
