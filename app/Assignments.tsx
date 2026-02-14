import { useState } from "react";
import { useEffect } from "react";

type assignmentProps = {
    assignmentName: string,
    autoReleaseDate: string | undefined,
    outDate?: string,
    dueDate?: string
    href?: string
}

/**
 * Determines whether an assignment should appear as released
 * based on its autoReleaseDate and the current date. 
 */
function shouldRelease(autoReleaseDate: string | undefined) {
    if (autoReleaseDate === undefined) {
        return true;
    }
    
    const now = new Date();
    // Convert now into EST
    const nowEST = new Date(
        now.toLocaleString("en-US", {
            timeZone: "America/New_York",
        })
    );

    return nowEST > new Date(autoReleaseDate);
}

/**
 * One row in the table of assignments
 */
function Assignment({assignmentName, autoReleaseDate = "", outDate = "TBD", dueDate = "TBD", href}: assignmentProps) {
    const [released, setReleased] = useState(false);

    useEffect(() => {
        setReleased(shouldRelease(autoReleaseDate));
    }, []);

    // Helper class for consistent cell padding
    // Reduced padding (px-3) on mobile, regular (px-6) on desktop
    const cellPadding = "px-3 md:px-6 py-4";

    if (released && href) {
        return (
            <tr className="hover:bg-white/5 transition-colors group">
                <td className={`${cellPadding} font-medium text-yellow-400 underline decoration-yellow-400/30 hover:decoration-blue-300/30 group-hover:text-blue-400`}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {assignmentName}
                    </a>
                </td>
                <td className={`${cellPadding} text-white/70 tabular-nums whitespace-nowrap`}>
                    {outDate}
                </td>
                <td className={`${cellPadding} text-white/70 tabular-nums whitespace-nowrap`}>
                    {dueDate}
                </td>
            </tr>
        );
    } else {
        return (
            <tr className="hover:bg-white/5 transition-colors group">
                <td className={`${cellPadding} font-medium text-white group-hover:text-yellow-200`}>
                    {assignmentName}
                </td>
                <td className={`${cellPadding} text-white/70 tabular-nums whitespace-nowrap`}>
                    {outDate}
                </td>
                <td className={`${cellPadding} text-white/70 tabular-nums whitespace-nowrap`}>
                    {dueDate}
                </td>
            </tr>
        );
    }
}

/**
 * The assignments section. For each assignment, shows the name (and hyperlink if released),
 * out date, and due date.
 */
export default function Assignments() {
    return (
        <section className="py-20">
          {/* 1. Responsive padding (p-4 md:p-10) and overflow control */}
          <div className="p-4 md:p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden md:overflow-visible">
            
            {/* 2. Responsive font size for header */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Assignments</h3>
            
            <p className="text-sm text-center mb-5 text-white/80">
                Assignments release at 2:00 PM EST and are due at 11:59 PM EST.
            </p>
            
            {/* 3. Horizontal Scroll Wrapper */}
            <div className="w-full overflow-x-auto">
                {/* min-w ensures the table keeps its shape and forces scroll on tiny screens */}
                <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                        <tr className="border-b border-white/20 bg-white/5">
                            {/* Adjusted padding: px-3 md:px-6 */}
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Assignment</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Out</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Due</th>
                        </tr>
                    </thead>

                    <tbody>
                        <Assignment
                            assignmentName="Homework 1: Uninformed Search"
                            autoReleaseDate="Jan 21, 2026 14:00:00 EDT"
                            outDate="1/21"
                            dueDate="2/2"
                            href="https://hackmd.io/J_rI-VavSAG-x_79-8xSnA"
                        />
                        <Assignment
                            assignmentName="Homework 2: Informed Search"
                            autoReleaseDate="Jan 28, 2026 14:00:00 EDT"
                            outDate="1/28"
                            dueDate="2/2"
                            href="https://hackmd.io/YBJfuAbtS6q9zRqVGHzW1Q"
                        />
                        <Assignment
                            assignmentName="Homework 3: Adversarial Search"
                            autoReleaseDate="Feb 04, 2026 14:00:00 EDT"
                            outDate="2/4"
                            dueDate="2/9"
                            href="https://hackmd.io/VEyD0wKYS5agl5Ovy5vclA"
                        />
                        <Assignment
                            assignmentName="Homework 4: SAT"
                            autoReleaseDate="Feb 11, 2026 14:00:00 EDT"
                            outDate="2/11"
                            dueDate="2/18"
                            href="https://hackmd.io/8oosauPNQ9-GjTHUVd01Hw"
                        />
                        <Assignment
                            assignmentName="Homework 5: KRR"
                            autoReleaseDate="Feb 14, 2026 02:40:00 EDT"
                            outDate="2/18"
                            dueDate="2/24"
                            href="https://hackmd.io/sPAQJzC8S368FUP07PKNgg"
                        />
                        <Assignment
                            assignmentName="Homework 6: Constrained Optimization"
                            autoReleaseDate="Feb 14, 2026 02:40:00 EST"
                            outDate="2/25"
                            dueDate="3/9"
                            href="https://hackmd.io/qXuz85jXTWeV6O473a6TOg"
                        />
                        <Assignment
                            assignmentName="Midterm"
                            autoReleaseDate={undefined}
                            outDate="3/13"
                            dueDate="3/13"
                        />
                        <Assignment
                            assignmentName="Homework 7: Linear Regression and Bias-Variance Tradeoff"
                            autoReleaseDate="Mar 13, 2026 14:00:00 EDT"
                            outDate="3/13"
                            dueDate="3/30"
                            href="https://hackmd.io/hzpjzJnYSaeZGuoIAyVrlQ"
                        />
                        <Assignment
                            assignmentName="Homework 8: Neural Networks"
                            autoReleaseDate="Mar 20, 2026 14:00:00 EDT"
                            outDate="3/20"
                            dueDate="4/6"
                            href="https://hackmd.io/MlpYU9rGSA6dy4aPXJ1Grg"
                        />
                        <Assignment
                            assignmentName="Homework 9: MDPs and Reinforcement Learning"
                            autoReleaseDate="Apr 06, 2026 14:00:00 EDT"
                            outDate="4/6"
                            dueDate="4/13"
                            href="https://hackmd.io/vwC97nAPTLa1QE3lAcQeTg"
                        />
                        <Assignment
                            assignmentName="Homework 10: LLMs + PDDL"
                            autoReleaseDate="Apr 13, 2026 14:00:00 EDT"
                            outDate="4/13"
                            dueDate="4/20"
                            href="https://hackmd.io/4cTsuCVRRmW1VxRnnDeHWg"
                        />
                        <Assignment
                            assignmentName="Final Project Part 1 (NO LATE DAYS ALLOWED)"
                            autoReleaseDate="Apr 20, 2026 14:00:00 EDT"
                            outDate="4/20"
                            dueDate="4/29"
                            href=""
                        />
                        <Assignment
                            assignmentName="Final Project Part 2 (NO LATE DAYS ALLOWED)"
                            autoReleaseDate="Apr 20, 2026 14:00:00 EDT"
                            outDate="4/20"
                            dueDate="5/4"
                            href=""
                        />
                    </tbody>
                </table>
            </div>
          </div>
        </section>
    );
}