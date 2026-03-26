import { View as RNView, ViewProps } from 'react-native'
import React, { Children, ReactElement, isValidElement } from 'react'

interface IViewProps extends ViewProps {
    visible?: boolean;
}

const View = ({ visible = true, children, ...props }: IViewProps) => {
    if (!visible) return null;
    return <RNView {...props}>{children}</RNView>;
};

interface IConditionProps {
    is?: boolean;
    children: React.ReactNode;
}

const If = ({ is, children }: IConditionProps) => {
    return is ? <>{children}</> : null;
};

const ElseIf = ({ is, children }: IConditionProps) => {
    return is ? <>{children}</> : null;
};

const Else = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const Condition = ({ children }: { children: React.ReactNode }) => {
    const childrenArray = Children.toArray(children) as ReactElement<IConditionProps>[];

    for (const child of childrenArray) {
        if (!isValidElement(child)) continue;

        if (child.type === If || child.type === ElseIf) {
            if (child.props.is) return child;
        } else if (child.type === Else) {
            return child;
        }
    }
    return null;
};


View.If = If;
View.ElseIf = ElseIf;
View.Else = Else;
View.Condition = Condition;

export default View;