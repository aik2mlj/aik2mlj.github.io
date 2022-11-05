---
title: "Mx Compiler"
excerpt: "A completely hand-made compiler for a toy language with multiple optimizations."
date: 2021-05-02
type: "Programming Project"
collection: projects
---

This huge project is assigned in MS208 course. We built a compiler from scratch, from the backend to the frontend (antlr4 used for parsing) and added 
multiple optimizing strategies to reach the `-O1` baseline. It was really an Odyssey both for mind and body.

The tutorial repo is [here](https://github.com/ACMClassCourses/Compiler-Design-Implementation). 
And my code is [here](https://github.com/aik2mlj/Mx-Compiler).

The bloated project structure looks like this:

```
.
├── ast
│  ├── ArrayTypeNode.java
│  ├── AssignExprNode.java
│  ├── ASTNode.java
│  ├── ASTVisitor.java
│  ├── BinaryExprNode.java
│  ├── BlockStmtNode.java
│  ├── BoolLiteralNode.java
│  ├── BreakStmtNode.java
│  ├── ClassDefNode.java
│  ├── ContinueStmtNode.java
│  ├── ExprNode.java
│  ├── ForStmtNode.java
│  ├── FuncCallExprNode.java
│  ├── FuncDefNode.java
│  ├── IdExprNode.java
│  ├── IfStmtNode.java
│  ├── IntLiteralNode.java
│  ├── LiteralExprNode.java
│  ├── MemberExprNode.java
│  ├── MethodExprNode.java
│  ├── NewExprNode.java
│  ├── NullLiteralNode.java
│  ├── PrefixExprNode.java
│  ├── ProgramNode.java
│  ├── ProgramUnitNode.java
│  ├── ReturnStmtNode.java
│  ├── SimpleStmtNode.java
│  ├── SingleTypeNode.java
│  ├── StmtNode.java
│  ├── StringLiteralNode.java
│  ├── SubscriptExprNode.java
│  ├── SuffixExprNode.java
│  ├── ThisExprNode.java
│  ├── TypeNode.java
│  ├── VarDefStmtNode.java
│  ├── VarListNode.java
│  ├── VarNode.java
│  ├── VoidTypeNode.java
│  └── WhileStmtNode.java
├── backend
│  ├── BugEmitter.java
│  ├── CodeEmitter.java
│  ├── InstSelector.java
│  ├── LivenessAnalysis.java
│  ├── RegAllocator.java
│  ├── RegAllocator_origin.java
│  ├── RegisterAllocator.java
│  └── StackOverFlow.java
├── frontend
│  ├── ASTBuilder.java
│  └── SemanticChecker.java
├── ir
│  ├── AvoidDupNames.java
│  ├── Block.java
│  ├── CFGSimplifier.java
│  ├── Dominancer.java
│  ├── Function.java
│  ├── instruction
│  │  ├── AllocaInst.java
│  │  ├── BinaryInst.java
│  │  ├── BitcastToInst.java
│  │  ├── BrInst.java
│  │  ├── CallInst.java
│  │  ├── GetElementPtrInst.java
│  │  ├── IcmpInst.java
│  │  ├── Inst.java
│  │  ├── LoadInst.java
│  │  ├── MoveInst.java
│  │  ├── PhiInst.java
│  │  ├── RetInst.java
│  │  ├── StoreInst.java
│  │  └── TerminalInst.java
│  ├── IRBuilder.java
│  ├── IRPass.java
│  ├── IRPrinter.java
│  ├── IRTypeTable.java
│  ├── IRVisitor.java
│  ├── Module.java
│  ├── operand
│  │  ├── Constant.java
│  │  ├── ConstBool.java
│  │  ├── ConstInt.java
│  │  ├── ConstNull.java
│  │  ├── ConstString.java
│  │  ├── GlobalVar.java
│  │  ├── Operand.java
│  │  ├── Parameter.java
│  │  └── Register.java
│  ├── ResolveAlloca.java
│  ├── ResolvePhi.java
│  ├── SymbolTable.java
│  └── type
│     ├── ArrayType.java
│     ├── IntType.java
│     ├── IRType.java
│     ├── PointerType.java
│     ├── StructType.java
│     └── VoidType.java
├── Main.java
├── optimize
│  ├── ADCE.java
│  ├── CSE.java
│  ├── Inliner.java
│  ├── InstCombiner.java
│  ├── LICM.java
│  ├── Loop.java
│  ├── LoopTreeConstructor.java
│  ├── MemCSE.java
│  ├── Optimization.java
│  ├── ReverseDominancer.java
│  ├── SCCP.java
│  └── SillyEffectChecker.java
├── parser
│  ├── Mx.g4
│  ├── Mx.interp
│  ├── Mx.tokens
│  ├── MxBaseListener.java
│  ├── MxBaseVisitor.java
│  ├── MxLexer.interp
│  ├── MxLexer.java
│  ├── MxLexer.tokens
│  ├── MxListener.java
│  ├── MxParser.java
│  └── MxVisitor.java
├── riscv
│  ├── ASMBlock.java
│  ├── ASMFunction.java
│  ├── ASMModule.java
│  ├── ASMVisitor.java
│  ├── instuctions
│  │  ├── ASMInst.java
│  │  ├── Binary.java
│  │  ├── Br.java
│  │  ├── Bz.java
│  │  ├── Call.java
│  │  ├── IBinary.java
│  │  ├── Jp.java
│  │  ├── La.java
│  │  ├── Ld.java
│  │  ├── Li.java
│  │  ├── Lui.java
│  │  ├── Move.java
│  │  ├── RBinary.java
│  │  ├── Ret.java
│  │  ├── St.java
│  │  └── Unary.java
│  ├── operands
│  │  ├── Address.java
│  │  ├── ASMOperand.java
│  │  ├── BaseOffsetAddr.java
│  │  ├── GlobalVar.java
│  │  ├── Immediate.java
│  │  ├── IntImm.java
│  │  ├── register
│  │  │  ├── PhysicalRegister.java
│  │  │  ├── Register.java
│  │  │  └── VirtualRegister.java
│  │  ├── RelocationImm.java
│  │  └── StackAddr.java
│  ├── StackFrame.java
│  └── SymbolTable.java
└── util
   ├── entity
   │  ├── Entity.java
   │  ├── FuncEntity.java
   │  └── VarEntity.java
   ├── error
   │  ├── Error.java
   │  ├── IRBuildingError.java
   │  ├── SemanticError.java
   │  └── SyntaxError.java
   ├── MxErrorListener.java
   ├── Pair.java
   ├── Position.java
   ├── Scope.java
   ├── SymbolTable.java
   └── type
      ├── ArrayType.java
      ├── BasicType.java
      ├── BoolType.java
      ├── ClassType.java
      ├── IntType.java
      ├── NullType.java
      ├── StringType.java
      ├── Type.java
      ├── TypeTable.java
      └── VoidType.java
```
