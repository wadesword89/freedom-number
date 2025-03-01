# Freedom Number

## Overview
 **Freedom Number** is a financial tool that helps users determine when they can achieve **financial independence**. By inputting investment details and assumptions, the app calculates the required investment amount (**Freedom Number**) and the age at which the user can safely retire (**Freedom Age**).

## Features
- **Real-time calculations** based on user inputs.
- **Dynamic investment input fields** for tracking multiple accounts.
- **Interactive visualization** of investment growth over time.
- **Customizable assumptions** for investment return, withdrawal rate, and risk tolerance.
- **Responsive design** for desktop and mobile.

## Technologies Used
- **Next.js 15** (React framework)
- **shadcn/ui** (UI components)
- **Recharts** (Data visualization)
- **React hooks** (State management and real-time updates)

## User Inputs
- **Current Total Investment Holdings**: Sum of all investment accounts.
- **Assumed Investment Return Rate**: Choose between **6% or 7%**.
- **Current Age**: Must be between **1 and 100**.
- **Future Withdrawal Rate**: Choose between **3.5% or 4%**.
- **Additional Monthly Investments**: Specify recurring investments per account.
- **Monthly Expenses**: Specify monthly expenses per category.
- **Risk Tolerance**: Choose between **Normal (25x expenses) or Conservative (30x expenses)**.

## App Outputs
- **Freedom Number**: Total amount needed for financial independence.
- **Freedom Age**: Age when the user reaches their Freedom Number.
- **Investment Growth Chart**: A dynamic visualization showing investment growth over time.

## Assumptions
- **No Social Security or pension income included**.
- **Consistent monthly contributions until Freedom Age**.
- **Steady annual investment returns (6% or 7%) with no market crashes**.
- **No taxes on withdrawals (assumes tax-advantaged accounts)**.
- **Fixed withdrawal rate (3.5% or 4%) throughout retirement**.

